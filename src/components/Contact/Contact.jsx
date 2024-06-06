import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic/Magnetic";
import { BsGithub } from "react-icons/bs";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                alt={"image"}
                src={`/images/background.jpeg`}
              />
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#000000"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav} id="contact">
          <Rounded>
            <p>guevaraeu1@gmail.com</p>
          </Rounded>
          <div className={styles.github}>
            <Rounded
              onClick={() =>
                (window.location.href = "https://github.com/Guevarnation")
              }
            >
              <BsGithub className={styles.githubIcon} />
              <p>Github</p>
            </Rounded>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            {/* <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span> */}
            {/* <Magnetic>
              <p>Instagram</p>
            </Magnetic> */}
            <Magnetic>
              <p
                onClick={() =>
                  (window.location.href =
                    "https://www.upwork.com/freelancers/~01ea49b72a680f73a9")
                }
              >
                UPWORK
              </p>
            </Magnetic>
            <Magnetic>
              <p
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/eugenio-guevara-a8417b20b/")
                }
              >
                Linkedin
              </p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
