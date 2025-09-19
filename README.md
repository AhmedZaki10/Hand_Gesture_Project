Hand Gesture Project
This project implements hand gesture recognition using MediaPipe and TensorFlow. It processes images from the ASL Alphabet dataset to classify hand gestures.
Setup Instructions
Follow these steps to set up and run the project on your local machine. These instructions ensure compatibility across Windows, macOS, and Linux.

Clone the repository:
git clone https://github.com/AhmedZaki10/Hand_Gesture_Project.git


Navigate to the project directory:
cd Hand_Gesture_Project


Install Python 3.11 (64-bit):

Download and install Python 3.11.9 (64-bit) from python.org.
Windows: Use the installer and select "Custom Installation". Install to a specific path (e.g., C:\Python311) and avoid adding to system PATH to prevent conflicts with other Python versions.
macOS/Linux: Use a package manager (e.g., brew install python@3.11 on macOS or sudo apt install python3.11 on Ubuntu) or download from python.org.
Verify the installation:python3.11 --version

Expected output: Python 3.11.9.


Create a virtual environment:

Use Python 3.11 to create an isolated environment:python3.11 -m venv Hand_Gesture_Project


Note: Replace python3.11 with the full path (e.g., C:\Python311\python.exe on Windows) if python3.11 is not in your PATH.


Activate the virtual environment:

Windows:Hand_Gesture_Project\Scripts\activate


macOS/Linux:source Hand_Gesture_Project/bin/activate


After activation, you should see (Hand_Gesture_Project) in your terminal prompt.


Install dependencies:

Install the required packages listed in requirements.txt:pip install -r requirements.txt


Important: The requirements.txt includes:
mediapipe==0.10.21
tensorflow==2.16.1
numpy==2.2.0
Other dependencies compatible with Python 3.11.


If you encounter dependency conflicts, ensure pip is up-to-date:pip install --upgrade pip




Download the dataset:

Download the ASL Alphabet dataset from Kaggle.
Extract the asl_alphabet_train and asl_alphabet_test folders into the Hand_Gesture_Project directory (i.e., D:\DEPI_Project\asl_alphabet_train and D:\DEPI_Project\asl_alphabet_test on Windows).


Run the project:

Execute the main script:python main.py





Troubleshooting

Python version issues:

Ensure you’re using Python 3.11 (64-bit). MediaPipe does not support Python 3.12+ or 32-bit Python.
If multiple Python versions are installed, specify the full path to Python 3.11 when creating the virtual environment (e.g., C:\Python311\python.exe -m venv Hand_Gesture_Project).


Dependency conflicts:

If pip install -r requirements.txt fails, try installing dependencies individually:pip install mediapipe==0.10.21 tensorflow==2.16.1 numpy==2.2.0


If conflicts persist, clear the virtual environment and reinstall:deactivate
rmdir /s Hand_Gesture_Project  # Windows
rm -rf Hand_Gesture_Project   # macOS/Linux
python3.11 -m venv Hand_Gesture_Project
source Hand_Gesture_Project/bin/activate  # or Hand_Gesture_Project\Scripts\activate
pip install -r requirements.txt




MediaPipe import errors:

Verify MediaPipe installation:python -c "import mediapipe as mp; print(mp.__version__)"

Expected output: 0.10.21.
If you see ImportError related to protobuf or tensorflow, ensure tensorflow==2.16.1 and protobuf==4.25.8 are installed.


Dataset issues:

Ensure the asl_alphabet_train and asl_alphabet_test folders are directly under the project directory and contain the correct image structure.



Project Structure

main.py: Main script for running the hand gesture recognition model.
requirements.txt: Lists all required Python packages.
README.md: Project setup instructions.
.gitignore: Ignores virtual environment and temporary files.
asl_alphabet_train/: Training dataset folder (to be downloaded).
asl_alphabet_test/: Test dataset folder (to be downloaded).

Notes

The project uses mediapipe==0.10.21 for hand gesture detection and tensorflow==2.16.1 for model processing, both compatible with Python 3.11.
Ensure your system has at least 8GB RAM and sufficient disk space for the dataset and virtual environment.
For macOS Apple Silicon (M1/M2/M3), use pip install mediapipe-silicon instead of mediapipe if you encounter compatibility issues.
