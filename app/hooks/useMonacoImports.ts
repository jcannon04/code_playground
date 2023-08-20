import { useEffect } from 'react';

function useMonacoContributions(): void {
    useEffect(() => {
        // Import the Monaco Editor and other browser-specific dependencies here
        import("monaco-editor/esm/vs/basic-languages/html/html.contribution");
        import(
          "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
        );
        import("monaco-editor/esm/vs/basic-languages/css/css.contribution");
        import("monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution");
        import("monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution");
        import("monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution");
        import("monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution");
        import("monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution");
        import("monaco-editor/esm/vs/basic-languages/go/go.contribution");
        import("monaco-editor/esm/vs/basic-languages/java/java.contribution");
        import("monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution");
        import("monaco-editor/esm/vs/basic-languages/lua/lua.contribution");
        import(
          "monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution"
        );
        import("monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution");
        import("monaco-editor/esm/vs/basic-languages/perl/perl.contribution");
        import("monaco-editor/esm/vs/basic-languages/php/php.contribution");
        import("monaco-editor/esm/vs/basic-languages/python/python.contribution");
        import("monaco-editor/esm/vs/basic-languages/r/r.contribution");
        import("monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution");
        import("monaco-editor/esm/vs/basic-languages/rust/rust.contribution");
        import("monaco-editor/esm/vs/basic-languages/scala/scala.contribution");
        import("monaco-editor/esm/vs/basic-languages/sql/sql.contribution");
        import("monaco-editor/esm/vs/basic-languages/swift/swift.contribution");
        import(
          "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution"
        );
      }, []);
}

export default useMonacoContributions;
