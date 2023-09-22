<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

// use Validator;

class ProjectController extends Controller
{
    public function fetch()
    {
        $projects = Project::orderBy("id", "desc")->get();
        
        return response()->json([
            "status" => "success",
            "message" => "Data has been fetched.",
            "projects" => $projects
        ]);
    }

    public function create()
    {
        $validator = Validator::make(request()->all(), [
            "name" => "required",
            "description" => "required",
            "client" => "required",
            "architech" => "required",
            "location" => "required",
            "size" => "required",
            "year_completed" => "required",
            "categories" => "required"
        ]);
        
        if ($validator->fails())
        {
            return response()->json([
                "status" => "error",
                "message" => $validator->errors()->all()[0]
            ]);
        }

        $project = new Project();
        $project->name = request()->name;
        $project->description = request()->description;
        $project->client = request()->client;
        $project->architect = request()->architech;
        $project->location = request()->location;
        $project->size = request()->size;
        $project->year_completed = request()->year_completed;
        $project->categories = request()->categories;
        $project->save();

        return response()->json([
            "status" => "success",
            "message" => "Project has been created."
        ]);
    }
}
