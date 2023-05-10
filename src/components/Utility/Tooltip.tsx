import * as TooltipRadix from '@radix-ui/react-tooltip';

type TooltipProps = {
  element: JSX.Element,
  text: string,
  place?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip = ({ element, text, place = 'bottom' }: TooltipProps) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={100}>
        <TooltipRadix.Trigger asChild>
          {element}
        </TooltipRadix.Trigger>
        <TooltipRadix.Content
          side={place}
          className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-darkColor dark:text-lightColor select-none rounded-lg bg-InputColorLight dark:bg-InputColorDark p-2 text-xs leading-none shadow-lg will-change-[transform,opacity]"
          sideOffset={2}
        >
          {text}
          <TooltipRadix.Arrow className="fill-InputColorLight dark:fill-InputColorDark" />
        </TooltipRadix.Content>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

export default Tooltip;