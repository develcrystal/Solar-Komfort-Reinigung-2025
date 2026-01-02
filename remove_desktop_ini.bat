@echo off
echo Removing all desktop.ini files from the project...

rem Use forfiles to find and delete all desktop.ini files recursively (excluding node_modules for safety)
echo Removing desktop.ini files (excluding node_modules)...
for /f "usebackq" %%i in (`dir /s /b /ad ^| findstr /v /i "node_modules"`) do (
  if exist "%%i\desktop.ini" (
    echo Deleting: %%i\desktop.ini
    del "%%i\desktop.ini"
  )
)

rem Also remove any desktop.ini files in the current directory and subdirectories (excluding node_modules)
for /f "usebackq" %%i in (`dir /s /b ^| findstr /v /i "node_modules" ^| findstr /i "desktop.ini$"`) do (
  echo Deleting: %%i
  del "%%i"
)

echo.
echo All desktop.ini files have been removed from the project (excluding node_modules).
pause