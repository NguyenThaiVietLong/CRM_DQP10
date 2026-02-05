@echo off
title DQP10 Prototype Server
echo ===============================================
echo   DAN QUAN PHƯỜNG BINH PHU - Prototype Server
echo ===============================================
echo.

:: Check if Python is installed
python --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python found! Starting server on port 8080...
    echo.
    echo -----------------------------------------------
    echo   Access: http://localhost:8080
    echo   Login:  http://localhost:8080/login.html
    echo   Press Ctrl+C to stop server
    echo -----------------------------------------------
    echo.
    start "" "http://localhost:8080/login.html"
    python -m http.server 8080
    goto :end
)

:: Check if Python3 is installed
python3 --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python3 found! Starting server on port 8080...
    echo.
    start "" "http://localhost:8080/login.html"
    python3 -m http.server 8080
    goto :end
)

:: Check if Node.js is installed
node --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js found! Checking for http-server...
    npx -y http-server -p 8080 -o /login.html
    goto :end
)

:: No server found
echo.
echo [ERROR] Khong tim thay Python hoac Node.js!
echo.
echo Vui long cai dat 1 trong 2:
echo   - Python: https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
echo Hoac mo file login.html truc tiep bang trinh duyet.
echo.
pause

:end
