import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, nav }) => (
  <motion.button
    initial={false}
    animate={nav ? "open" : "closed"}
    onClick={toggle}
    className="absolute right-5 top-5 z-10 flex rounded-md bg-primary-color p-1"
  >
    <svg width="25" height="25" viewBox="0 -1 20 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 18 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 18 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 18 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);
