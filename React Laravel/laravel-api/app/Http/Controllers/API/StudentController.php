<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use File;

class StudentController extends Controller
{

    public function store(Request $request)
    {
        $student = new Student;
        $student -> nama = $request -> input('nama');
        $student -> nim = $request -> input('nim');
        $student -> prodi = $request -> input('prodi');
        $student -> email = $request -> input('email');
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;

            $file->move('uploads/student/', $filename);
            $student -> image = 'uploads/student/'.$filename;
        }
        $student -> save();

        return response()->json([
            'status' => 200,
            'message' => 'Student Added Succesfully',
        ]);
    }

    public function fetch()
    {
        $students = Student::all();

        return response()->json([
            'status' => 200,
            'students' => $students,
        ]);
    }

    public function edit($id)
    {
        $student = Student::find($id);

        return response()->json([
            'status' => 200,
            'student' => $student,
        ]);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);
        if($student)
        {
            $student -> nama = $request -> input('nama');
            $student -> nim = $request -> input('nim');
            $student -> prodi = $request -> input('prodi');
            $student -> email = $request -> input('email');
            
            if($request->hasFile('image'))
            {
                $path = $student->image;
                if(File::exists($path)) 
                {
                    File::delete($path);
                }
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() .'.'.$extension;
                $file->move('uploads/student/', $filename);
                $student -> image = 'uploads/student/'.$filename;
            }
            $student -> update();
        }

        return response()->json([
            'status' => 200,
            'message' => 'Student Updated Succesfully',
        ]);
    }

    public function remove($id)
    {
        $student = Student::find($id);
        $student->delete();

        $path = $student->image;
        File::delete($path);

        return response()->json([
            'status' => 200,
            'message' => 'Student Deleted Succesfully',
        ]);
    }
   
}
