import ModeSwitch from "@/components/modeswitch";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import styles from "@/styles/myHeader.module.css";

import { Image } from "@chakra-ui/react";
export default function MyHeader(params) {
  const { avatar } = params;
  return (
    <div className={styles.headerBox}>
      <div className={styles.blankLine}></div>
      <Flex>
        <Flex className={styles.header} style={{ width: "30rem" }}>
          <div></div>
        </Flex>
        <Flex className={styles.avatarBox}>
          <Flex>
            <Image
              className={styles.imageShadow}
              src={avatar.avatarSrc}
              alt={avatar.alt}
              boxSize={"12rem"}
            />
            <Image
              className={styles.image}
              src={avatar.avatarSrc}
              alt={avatar.alt}
              boxSize={"12rem"}
            />
          </Flex>
          <Flex alignContent={"center"} justifyContent={"center"} color="white">
            <div width={"12rem"}>Peter</div>
          </Flex>
        </Flex>
        <Flex className={styles.header}>
          <div className={styles.headerVLine}></div>
        </Flex>
      </Flex>
    </div>
  );
}
