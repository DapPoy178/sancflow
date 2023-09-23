<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthTableSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'master',
            'email' => 'master@gmail.com',
            'asrama_id' => '1',
            'role_id' => '1',
            'password' =>Hash::make('prayge')
        ]);
    }
}
