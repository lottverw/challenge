<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;

class ProjectController extends Controller
{
    
   /**
     * @return json 
     */
    public function index(Request $request)
    {
    
        if($request->has('user_id')){
           $projects = Project::whereDoesntHave('users', function($query) use ($request) {
                $query->where('uuid', $request->query('user_id'));
            })->get();
        }
        else {
            $projects = Project::with('users')->get();
        }


        $data = array_map(function ($project) {
            return [
                "id" => $project['uuid'],
                "color" => $project['color'],
                "name"=> $project['name'],
                "description" => $project['description'],
                "deadline" => (new \DateTime($project['deadline']))->format('d M. Y'),
                "budget" => $project['budget'],
                "users" => isset($project['users'])? array_map(function ($user) {
                    return [
                        "id" => $user['uuid'],
                        "image" => $user['image'],
                        "name"=> $user['name'],
                        "jobTitle"=> $user['job_title'],
                        "email"=> $user['email'],
                    ];
                }, $project['users']) : []
            ];
        }, $projects->toArray());

        return response()->json($data);
    }
    
    
    /**
     * @return json 
     */
    public function assignUser(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,uuid',
            'project_id' => 'required|exists:projects,uuid'
        ]);

        $user = User::where('uuid', $validatedData['user_id'])->first();
        $project = Project::where('uuid', $validatedData['project_id'])->first();

        $project->users()->attach($user->id);

        return response()->json(['message' => 'User assigned to project successfully'], 201);
    }
}
