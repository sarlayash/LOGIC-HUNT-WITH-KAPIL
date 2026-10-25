import http.server
import socketserver
import webbrowser
import os

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"\n=======================================================")
        print(f"★ SYM PRODUCTIONS PRESENTS: LOGIC HUNT WITH KAPIL ★")
        print(f"=======================================================")
        print(f"Server live at: {url}")
        print(f"Opening browser automatically...")
        print(f"Press Ctrl+C to stop the server.")
        print(f"=======================================================\n")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server. Goodbye!")
