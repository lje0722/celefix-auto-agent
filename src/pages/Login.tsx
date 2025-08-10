import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

//로그인 페이지

<!DOCTYPE html>
<html data-theme="light" lang="ko" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>로그인 페이지</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<style>
        body {
            background-color: #0f0f19;
            color: #ffffff;
            font-family: 'Pretendard', sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-container {
            background-color: #12121e;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }
        .form-input {
            background-color: #1a1a2a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 12px 16px;
            color: #ffffff;
            width: 100%;
        }
        .form-input:focus {
            border-color: #f472b6;
            outline: none;
        }
        .btn-primary {
            background-color: #f472b6;
            color: #ffffff;
            transition: all 0.3s;
            border-radius: 8px;
            padding: 12px;
            font-weight: 600;
            width: 100%;
        }
        .btn-primary:hover {
            background-color: #ec4899;
        }
        .btn-outline {
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #f8fafc;
            transition: all 0.3s;
            border-radius: 8px;
            padding: 12px;
            font-weight: 600;
            width: 100%;
        }
        .btn-outline:hover {
            border-color: #f472b6;
            color: #f472b6;
        }
        .tab {
            cursor: pointer;
            padding: 14px;
            text-align: center;
            border-bottom: 3px solid transparent;
            transition: all 0.3s;
            font-weight: 600;
        }
        .tab.active {
            border-color: #f472b6;
            color: #f472b6;
        }
        .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            transition: all 0.3s;
            background-color: #1a1a2a;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-btn:hover {
            background-color: #2a2a3a;
        }
        .form-checkbox {
            appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            background-color: transparent;
            display: inline-block;
            position: relative;
            margin-right: 8px;
            vertical-align: middle;
        }
        .form-checkbox:checked {
            background-color: #f472b6;
            border-color: #f472b6;
        }
        .form-checkbox:checked::before {
            content: '\2713';
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 12px;
        }
        .celebrity-accent {
            color: #f472b6;
        }
    </style>
</head>
<body style="">
<div class="container mx-auto px-4 w-1280 min-h-720 flex justify-center items-center">
<div class="login-container w-full max-w-md p-6">
<!-- 로고 영역 -->
<div class="text-center mb-8">
<div class="flex justify-center">
<div class="text-4xl font-bold celebrity-accent flex items-center">
<i class="fas fa-star mr-2 text-4xl"></i>Celefix
</div>
</div>
<p class="text-gray-400 mt-2">연예인 섭외의 모든 것</p>
</div>
<!-- 탭 토글 -->
<div class="flex mb-6 border-b border-gray-800">
<div class="tab active w-1/2" id="userTab">
<i class="fas fa-user mr-2"></i>사용자 로그인
</div>
<div class="tab w-1/2" id="adminTab">
<i class="fas fa-user-shield mr-2"></i>관리자 로그인
</div>
</div>
<!-- 로그인 폼 -->
<form>
<div class="space-y-4">
<div>
<label class="block text-sm font-medium mb-2" for="email">이메일</label>
<input class="form-input" id="email" placeholder="이메일 주소 입력" type="email">
</div>
<div>
<label class="block text-sm font-medium mb-2" for="password">비밀번호</label>
<div class="relative">
<input class="form-input pr-10" id="password" placeholder="비밀번호 입력" type="password">
<button class="absolute right-3 top-3 text-gray-400" type="button">
<i class="far fa-eye"></i>
</button>
</div>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center">
<input class="form-checkbox" id="remember" type="checkbox">
<label class="text-sm text-gray-300" for="remember">로그인 유지</label>
</div>
<a class="text-sm text-gray-300 hover:text-pink-400" href="#">비밀번호 찾기</a>
</div>
<div>
<button class="btn-primary mt-2" type="submit">로그인</button>
</div>
</div>
<!-- 또는 -->
<div class="flex items-center my-4">
<div class="flex-grow border-t border-gray-800"></div>
<span class="mx-4 text-sm text-gray-400">또는</span>
<div class="flex-grow border-t border-gray-800"></div>
</div>
<!-- 소셜 로그인 -->
<div class="grid grid-cols-2 gap-4 mb-6">
<button class="social-btn" type="button">
<i class="fab fa-google text-red-400 mr-2"></i>Google
</button>
<button class="social-btn" type="button">
<i class="fab fa-apple text-white mr-2"></i>Apple
</button>
</div>
<!-- 가입하기 -->
<div class="text-center text-sm mt-6">
<span class="text-gray-400">계정이 없으신가요?</span>
<a class="celebrity-accent ml-1 font-medium" href="#">가입하기</a>
</div>
</form>
</div>
</div>
<script>
    // 탭 전환
    document.getElementById('userTab').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('adminTab').classList.remove('active');
    });
    document.getElementById('adminTab').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('userTab').classList.remove('active');
    });
</script>

</body></html>