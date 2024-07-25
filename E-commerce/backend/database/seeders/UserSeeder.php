<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
           [ 'name'=>'sellak',
            'email'=>'sellak@gmail.com',
            'password'=>'pass1234',
            'role'=>'client'],
            [
              'name'=>'akram',
            'email'=>'akram@gmail.com',
            'password'=>'qazwsxedcrfv',
            'role'=>'admin'  
            ]
        ]);
    }
}
