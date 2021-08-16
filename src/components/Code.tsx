import React, { useEffect } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import { Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import tomorrowNight from "prism-react-renderer/themes/oceanicNext";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-php");

type CodeProps = {
  code: string;
  language: Language;
};

const Code = ({ code, language }: CodeProps) => {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={tomorrowNight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
