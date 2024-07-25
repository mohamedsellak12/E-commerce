<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', function (Request $request)
{
    if (User::where('email',$request->email)) {
      $user=  User::where('email',$request->email)->first();
      if($user || Hash::check($request->password,$user->password)){
        $token=$user->createToken('TOKEN')->plainTextToken;
        return response()->json(['user'=>$user,'token'=>$token]);
      }
      

       
    }
   
}

);