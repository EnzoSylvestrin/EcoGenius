import { motion } from 'framer-motion';

import clsx from 'clsx';

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg',
  text: string,
  href?: string,
  full?: boolean,
  type?: "button" | "submit" | "reset",
  loading?: boolean,
  onClick?: () => void,
}

export const Button = ({ size = 'md', type = "button", text, href, loading = false, full, onClick, ...props }: ButtonProps) => {
  const Button = href ? 'a' : 'button';

  return (
    <Button
      type={type}
      className={clsx(
        "rounded-lg bg-main text-white ring-main ring-2 transition-all duration-500 ",
        "px-2 py-1 cursor-pointer shadow-lg selection:text-inherit",
        'hover:bg-transparent hover:text-main', {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'w-full': full,
        '!text-transparent relative bg-transparent': loading
      })}
      {...(href ? { target: "_blank", rel: "noopener noreferrer", href: href } : {})}
      onClick={!loading ? onClick : () => { return }}
      {...props}
    >
      {text}
      {
        loading
          ?
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <motion.div
              className="rounded-full border-main border-2 border-t-transparent w-6 h-6"
              animate={{
                rotate: '360deg'
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            />
          </div>
          :
          ''
      }
    </Button>
  );
};
