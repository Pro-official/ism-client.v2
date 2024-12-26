import { useState } from "react";
import Editor from "./Editor";
import GeneralInput from "./GeneralInput";
import { useEditor } from "../../hooks/useEditor";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";

export default function IdeaForm() {
  const [content, setContent] = useState("");
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const { editorRef, focusEditor } = useEditor();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title || !content) {
      setError("Please fill all the fields.");
      return;
    }

    if (!user?._id) {
      setError("User is not authenticated.");
      return;
    }

    try {
      const response = await fetch(
        "https://ism-server.onrender.com/api/ideas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            banner,
            author: user._id,
          }),
        }
      );
      if (!response.ok) {
        const message = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${message}`);
      }
      console.log(response);

      // Clear form
      setContent("");
      setBanner("");
      setTitle("");
      // Focus editor after submission
      focusEditor();
      navigate("/account", { replace: true });
    } catch (error: unknown) {
      let errorMessage = "Failed to create account";
      if (error instanceof Error) {
        errorMessage = `${errorMessage}, ${error.message}`;
      } else if (typeof error === "string") {
        errorMessage = `${errorMessage}, ${error}`;
      } else {
        errorMessage = `${errorMessage}, ${JSON.stringify(error)}`;
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="bg-black/10 backdrop-blur-lg mt-10 rounded-xl p-6 border border-white/50">
      {error && (
        <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <GeneralInput
          inputType="title"
          placeHolder="Your Idea Title"
          value={title}
          onChange={setTitle}
        />
        <Editor
          ref={editorRef}
          value={content}
          onChange={setContent}
          placeholder="Share your idea..."
          className="my-4"
        />

        <div className="flex items-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white/90 font-bold hover:from-green-600 hover:to-green-500 transition-colors flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
