<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userName = fake()->username().random_int(1000, 9999);
        
        User::create([
            'name' => $userName,
            'email' => $userName.'@'.fake()->domainName(),
            'email_verified_at' => now(),
            'password' => bcrypt('password'), 
        ]);
    }
}
