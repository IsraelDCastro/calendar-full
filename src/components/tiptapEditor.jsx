import React, { useState, useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  faArrowTurnDown,
  faBold,
  faBroom,
  faCode,
  faEraser,
  faFont,
  faHeading,
  faImage,
  faItalic,
  faLaptopCode,
  faLink,
  faLinkSlash,
  faList,
  faListNumeric,
  faPalette,
  faParagraph,
  faQuoteLeft,
  faRotateLeft,
  faRotateRight,
  faRulerHorizontal,
  faStrikethrough,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import { Link } from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

function MenuBar({ classNames, toolbarItems }) {
  const { editor } = useCurrentEditor();
  const [isOpen, setIsOpen] = useState(false);
  const [isHeadingOpen, setIsHeadingOpen] = useState(false);
  const popupRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        headingRef.current &&
        !headingRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsHeadingOpen(false); // Close heading dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: "100%",
        height: "720px"
      });
    }
  };

  if (!editor) {
    return null;
  }

  const COLORS = {
    default: {
      100: "#F2F2F2",
      200: "#D9D9D9",
      300: "#BFBFBF",
      400: "#808080",
      500: "#4D4D4D",
      600: "#000000"
    },
    gray: {
      100: "#E6E6E6",
      200: "#CCCCCC",
      300: "#B3B3B3",
      400: "#999999",
      500: "#808080",
      600: "#666666"
    },
    red: {
      100: "#FFE5E5",
      200: "#FFCCCC",
      300: "#FF9999",
      400: "#FF6666",
      500: "#FF3333",
      600: "#FF0000"
    },
    orange: {
      100: "#FFF0E5",
      200: "#FFE0CC",
      300: "#FFC299",
      400: "#FFA366",
      500: "#FF8533",
      600: "#FF9900"
    },
    yellow: {
      100: "#FFFFF0",
      200: "#FFFFE0",
      300: "#FFFFC2",
      400: "#FFFFA3",
      500: "#FFFF85",
      600: "#FFFF00"
    },
    green: {
      100: "#E5FFE5",
      200: "#CCFFCC",
      300: "#99FF99",
      400: "#66FF66",
      500: "#33FF33",
      600: "#00FF00"
    },
    blue: {
      100: "#E5E5FF",
      200: "#CCCCFF",
      300: "#9999FF",
      400: "#6666FF",
      500: "#3333FF",
      600: "#0000FF"
    },
    purple: {
      100: "#F5E5FF",
      200: "#EBCCFF",
      300: "#D699FF",
      400: "#C266FF",
      500: "#AD33FF",
      600: "#9900FF"
    },
    pink: {
      100: "#FFE5FF",
      200: "#FFCCFF",
      300: "#FF99FF",
      400: "#FF66FF",
      500: "#FF33FF",
      600: "#FF00FF"
    },
    brown: {
      100: "#E5D5CC",
      200: "#CCAA99",
      300: "#B38066",
      400: "#995533",
      500: "#804D33",
      600: "#8B4513"
    }
  };

  const getCurrentColor = () => {
    return editor.getAttributes("textStyle").color || "#000000";
  };

  const getCurrentTypography = () => {
    if (editor.getAttributes("heading").level === 1) {
      return (
        <span>
          <FontAwesomeIcon icon={faHeading} />
          &nbsp;
          <FontAwesomeIcon icon={fa1} />
        </span>
      );
    }

    if (editor.getAttributes("heading").level === 2) {
      return (
        <span>
          <FontAwesomeIcon icon={faHeading} />
          &nbsp;
          <FontAwesomeIcon icon={fa2} />
        </span>
      );
    }
    if (editor.getAttributes("heading").level === 3) {
      return (
        <span>
          <FontAwesomeIcon icon={faHeading} />
          &nbsp;
          <FontAwesomeIcon icon={fa3} />
        </span>
      );
    }
    if (editor.getAttributes("heading").level === 4) {
      return (
        <span>
          <FontAwesomeIcon icon={faHeading} />
          &nbsp;
          <FontAwesomeIcon icon={fa4} />
        </span>
      );
    }
    if (editor.getAttributes("heading").level === 5) {
      return (
        <span>
          <FontAwesomeIcon icon={faHeading} />
          &nbsp;
          <FontAwesomeIcon icon={fa5} />
        </span>
      );
    }
    if (editor.getAttributes("heading").level === 6) {
      return (
        <span>
          <FontAwesomeIcon icon={faHeading} />
          &nbsp;
          <FontAwesomeIcon icon={fa6} />
        </span>
      );
    }
    return <FontAwesomeIcon icon={faParagraph} />;
  };

  const handleColorSelect = (color) => {
    if (color === "#000000") {
      editor.chain().focus().unsetColor().run();
    } else {
      editor.chain().focus().setColor(color).run();
    }
    setIsOpen(false);
  };

  const handleHeadingToggle = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    setIsHeadingOpen(false);
  };

  return (
    <div className={`tiptap-menubar ${classNames?.menuBar}`}>
      {(toolbarItems.includes("bold") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("bold") ? "is-active" : ""}`}
        >
          <span className="sr-only">Bold</span>
          <FontAwesomeIcon icon={faBold} />
        </button>
      )}

      {(toolbarItems.includes("italic") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("italic") ? "is-active" : ""}`}
        >
          <span className="sr-only">Italic</span>
          <FontAwesomeIcon icon={faItalic} />
        </button>
      )}

      {(toolbarItems.includes("strike") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("strike") ? "is-active" : ""}`}
        >
          <span className="sr-only">Strike</span>
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
      )}

      {(toolbarItems.includes("code") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("code") ? "is-active" : ""}`}
        >
          <span className="sr-only">Code</span>
          <FontAwesomeIcon icon={faCode} />
        </button>
      )}

      {(toolbarItems.includes("heading") || toolbarItems.includes("all")) && (
        <div className={`tiptap-button ${classNames?.button}`} ref={headingRef}>
          <button type="button" onClick={() => setIsHeadingOpen(!isHeadingOpen)}>
            <FontAwesomeIcon icon={faFont} /> | {getCurrentTypography()}
          </button>
          {isHeadingOpen && (
            <div className="absolute z-50 mt-2 flex w-24 flex-wrap rounded-md border border-gray-200 bg-white shadow-lg">
              <button
                type="button"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("paragraph") ? "is-active" : ""}`}
              >
                <FontAwesomeIcon icon={faParagraph} />
              </button>
              <button
                type="button"
                onClick={() => handleHeadingToggle(1)}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("heading", { level: 1 }) ? "is-active" : ""}`}
              >
                <span>
                  <FontAwesomeIcon icon={faHeading} />
                  &nbsp;
                  <FontAwesomeIcon icon={fa1} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleHeadingToggle(2)}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("heading", { level: 2 }) ? "is-active" : ""}`}
              >
                <span>
                  <FontAwesomeIcon icon={faHeading} />
                  &nbsp;
                  <FontAwesomeIcon icon={fa2} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleHeadingToggle(3)}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("heading", { level: 3 }) ? "is-active" : ""}`}
              >
                <span>
                  <FontAwesomeIcon icon={faHeading} />
                  &nbsp;
                  <FontAwesomeIcon icon={fa3} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleHeadingToggle(4)}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("heading", { level: 4 }) ? "is-active" : ""}`}
              >
                <span>
                  <FontAwesomeIcon icon={faHeading} />
                  &nbsp;
                  <FontAwesomeIcon icon={fa4} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleHeadingToggle(5)}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("heading", { level: 5 }) ? "is-active" : ""}`}
              >
                <span>
                  <FontAwesomeIcon icon={faHeading} />
                  &nbsp;
                  <FontAwesomeIcon icon={fa5} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleHeadingToggle(6)}
                className={`tiptap-button ${classNames?.button} w-full ${editor.isActive("heading", { level: 6 }) ? "is-active" : ""}`}
              >
                <span>
                  <FontAwesomeIcon icon={faHeading} />
                  &nbsp;
                  <FontAwesomeIcon icon={fa6} />
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {(toolbarItems.includes("bulletList") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("bulletList") ? "is-active" : ""}`}
        >
          <span className="sr-only">Bullet list</span>
          <FontAwesomeIcon icon={faList} />
        </button>
      )}

      {(toolbarItems.includes("orderedList") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("orderedList") ? "is-active" : ""}`}
        >
          <span className="sr-only">Ordered list</span>
          <FontAwesomeIcon icon={faListNumeric} />
        </button>
      )}

      {(toolbarItems.includes("codeBlock") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("codeBlock") ? "is-active" : ""}`}
        >
          <span className="sr-only">Code block</span>
          <FontAwesomeIcon icon={faLaptopCode} />
        </button>
      )}

      {(toolbarItems.includes("blockquote") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          className={`tiptap-button ${classNames?.button} ${editor.isActive("blockquote") ? "is-active" : ""}`}
        >
          <span className="sr-only">Blockquote</span>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </button>
      )}

      {(toolbarItems.includes("link") || toolbarItems.includes("all")) && (
        <>
          <button
            type="button"
            onClick={setLink}
            className={`tiptap-button ${classNames?.button} ${editor.isActive("link") ? "is-active" : ""}`}
          >
            <span className="sr-only">Link</span>
            <FontAwesomeIcon icon={faLink} />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive("link")}
            className={`tiptap-button ${classNames?.button}`}
          >
            <span className="sr-only">Unset link</span>
            <FontAwesomeIcon icon={faLinkSlash} />
          </button>
        </>
      )}

      {(toolbarItems.includes("image") || toolbarItems.includes("all")) && (
        <button type="button" onClick={addImage} className={`tiptap-button ${classNames?.button}`}>
          <span className="sr-only">Add image</span>
          <FontAwesomeIcon icon={faImage} />
        </button>
      )}

      {(toolbarItems.includes("youtube") || toolbarItems.includes("all")) && (
        <button type="button" onClick={addYoutubeVideo} className={`tiptap-button ${classNames?.button}`}>
          <span className="sr-only">Add YouTube video</span>
          <FontAwesomeIcon icon={faVideo} />
        </button>
      )}

      {(toolbarItems.includes("horizontalRule") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={`tiptap-button ${classNames?.button}`}
        >
          <span className="sr-only">Horizontal rule</span>
          <FontAwesomeIcon icon={faRulerHorizontal} />
        </button>
      )}

      {(toolbarItems.includes("hardBreak") || toolbarItems.includes("all")) && (
        <button type="button" onClick={() => editor.chain().focus().setHardBreak().run()} className={`tiptap-button ${classNames?.button}`}>
          <span className="sr-only">Hard break</span>
          <FontAwesomeIcon icon={faArrowTurnDown} className="fa-rotate-90" />
        </button>
      )}

      {(toolbarItems.includes("undo") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={`tiptap-button ${classNames?.button}`}
        >
          <span className="sr-only">Undo</span>
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
      )}

      {(toolbarItems.includes("redo") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={`tiptap-button ${classNames?.button}`}
        >
          <span className="sr-only">Redo</span>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
      )}
      {(toolbarItems.includes("color") || toolbarItems.includes("all")) && (
        <div className={`tiptap-button ${classNames?.button}`} ref={popupRef}>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1">
            <span className="h-4 w-4 rounded" style={{ backgroundColor: getCurrentColor() }} />
            <span className="sr-only">Color</span>
            <FontAwesomeIcon icon={faPalette} />
          </button>

          {isOpen && (
            <div className="color-box-palette">
              <div className="flex flex-wrap gap-2">
                {Object.entries(COLORS).map(([groupName, colorShades]) => (
                  <div key={groupName}>
                    <div className="flex gap-1">
                      {Object.entries(colorShades).map(([shade, color]) => (
                        <button
                          key={shade}
                          type="button"
                          onClick={() => handleColorSelect(color)}
                          className="size-5 rounded transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                          title={`${groupName} ${shade}`}
                        >
                          <span className="sr-only">{`${groupName} ${shade}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {(toolbarItems.includes("clearMarks") || toolbarItems.includes("all")) && (
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className={`tiptap-button ${classNames?.button}`}
        >
          <span className="sr-only">Clear marks</span>
          <FontAwesomeIcon icon={faEraser} />
        </button>
      )}

      {(toolbarItems.includes("clearNodes") || toolbarItems.includes("all")) && (
        <button type="button" onClick={() => editor.chain().focus().clearNodes().run()} className={`tiptap-button ${classNames?.button}`}>
          <span className="sr-only">Clear nodes</span>
          <FontAwesomeIcon icon={faBroom} />
        </button>
      )}
    </div>
  );
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false
    }
  }),
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
    protocols: ["http", "https"],
    isAllowedUri: (url, ctx) => {
      try {
        // construct URL
        const parsedUrl = url.includes(":") ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);

        // use default validation
        if (!ctx.defaultValidate(parsedUrl.href)) {
          return false;
        }

        // disallowed protocols
        const disallowedProtocols = ["ftp", "file", "mailto"];
        const protocol = parsedUrl.protocol.replace(":", "");

        if (disallowedProtocols.includes(protocol)) {
          return false;
        }

        // only allow protocols specified in ctx.protocols
        const allowedProtocols = ctx.protocols.map((p) => (typeof p === "string" ? p : p.scheme));

        if (!allowedProtocols.includes(protocol)) {
          return false;
        }

        // disallowed domains
        const disallowedDomains = ["example-phishing.com", "malicious-site.net"];
        const domain = parsedUrl.hostname;

        if (disallowedDomains.includes(domain)) {
          return false;
        }

        // all checks have passed
        return true;
      } catch (error) {
        return false;
      }
    },
    shouldAutoLink: (url) => {
      try {
        // construct URL
        const parsedUrl = url.includes(":") ? new URL(url) : new URL(`https://${url}`);

        // only auto-link if the domain is not in the disallowed list
        const disallowedDomains = ["example-no-autolink.com", "another-no-autolink.com"];
        const domain = parsedUrl.hostname;

        return !disallowedDomains.includes(domain);
      } catch (error) {
        return false;
      }
    }
  }),
  Image.configure({
    HTMLAttributes: {
      class: "tiptap-image"
    }
  }),
  Youtube.configure({
    controls: false,
    nocookie: true
  })
];

export default function TiptapEditor({
  name = "tiptap-editor",
  content,
  toolbarItems = ["all"],
  onChange,
  onBlur,
  onTransaction,
  classNameEditor = { wrapper: "", editor: "" },
  classNameMenuBar = { menuBar: "", button: "" }
}) {
  return (
    <div className={`tiptap-wrap ${classNameEditor?.wrapper}`}>
      <EditorProvider
        slotBefore={<MenuBar classNames={{ ...classNameMenuBar }} toolbarItems={toolbarItems} />}
        extensions={extensions}
        content={content}
        editorProps={{
          attributes: {
            class: `${classNameEditor?.editor} tiptap-content focus:outline-none`,
            name
          }
        }}
        onUpdate={(event) => {
          if (onChange) {
            onChange({ name, value: event.editor.getHTML() });
            return;
          }
          console.log("onUpdate", { name, value: event.editor.getHTML() });
        }}
        onTransaction={(event) => {
          if (onTransaction) {
            onTransaction({ name, value: event.editor.getHTML() });
            return;
          }
          console.log("onTransaction", { name, value: event.editor.getHTML() });
        }}
        onBlur={(event) => {
          if (onBlur) {
            onBlur({ name, value: event.editor.getHTML() });
            return;
          }
          console.log({ name, value: event.editor.getHTML() });
        }}
      />
    </div>
  );
}
