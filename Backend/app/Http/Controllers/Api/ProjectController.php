<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;

class ProjectController extends Controller
{
    
   /**
     * @OA\Get(
     *     path="/api/projects",
     *     @OA\Response(response="200", description="An project endpoint")
     * )
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
            $projects = Project::all();
        }



        $data = array_map(function ($project) {
            return [
                "id" => $project['uuid'],
                "color" => $project['color'],
                "name"=> $project['name'],
                "description" => $project['description'],
                "deadline" => (new \DateTime($project['deadline']))->format('d M. Y'),
                "budget" => $project['budget']
            ];
        }, $projects->toArray());

        return response()->json($data);
    }
    
    
    /**
     * @OA\Post(
     *     path="/api/projects/assign",
     *     @OA\Response(response="201", description="Assign a user to a project")
     * )
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