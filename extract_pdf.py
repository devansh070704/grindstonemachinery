from pypdf import PdfReader
import sys

def extract_text(pdf_path, output_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n\n"
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted text to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    pdf_file = r"C:\Users\devan\Downloads\Website Content Extraction For Machinery Company.pdf"
    output_file = "extracted_content.txt"
    extract_text(pdf_file, output_file)
