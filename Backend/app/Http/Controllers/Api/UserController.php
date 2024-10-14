<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
/**
 * @OA\Info(
 *   version="1.0.0",
 *   title="Get users endpoint"
 * )
 */
class UserController extends Controller
{
    
   /**
     * @return json 
     */
    public function index()
    {
        $users = User::with('projects')->get();

        $data = array_map(function ($user) {
            return [
                "id" => $user['uuid'],
                "image" => $user['image'],
                "name"=> $user['name'],
                "jobTitle"=> $user['job_title'],
                "email"=> $user['email'],
                "projects"=> 
                
                array_map(function ($project) {
                    return [
                        "id" => $project['uuid'],
                        "color" => $project['color'],
                        "name"=> $project['name'],
                        "description" => $project['description'],
                        "deadline" => (new \DateTime($project['deadline']))->format('d M. Y'),
                        "budget" => $project['budget'],
                    ];
                }, $user['projects'])
                
            ];
        }, $users->toArray());

        return response()->json($data);
    }

    /**
     * @param  string  $uuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($uuid)
    {
        if(!preg_match('/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/',$uuid,$matches)) {
            return response()->json(['message' => 'Bad request'], 400);
        }

        $user = User::with('projects')->where('uuid', $uuid)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user);
    }
}
