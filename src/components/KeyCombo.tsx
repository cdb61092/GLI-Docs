import { Kbd } from "@chakra-ui/react";

const KeyCombo = ({ keys }) => {
  const lastKey = keys[keys.length - 1];
  return (
    <div>
      {keys.map((key: string) => {
        return (
          <Kbd>
            {key} {key !== lastKey ? " +" : null}
          </Kbd>
        );
      })}
    </div>
  );
};

export default KeyCombo;
