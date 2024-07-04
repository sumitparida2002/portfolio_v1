import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionDemo = ({ title, content, hashtags, links }) => (
  <Accordion.Root
    className="AccordionRoot dark:bg-[#112240] bg-white py-2"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem " value="item-1">
      <AccordionTrigger hashtags={hashtags}>{title}</AccordionTrigger>
      <AccordionContent links={links}>{content}</AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, hashtags, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader dark:bg-[#112240] bg-white py-2">
      <Accordion.Trigger
        className={classNames(
          "AccordionTrigger flex items-center justify-between text-xl ",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
      <p className="date text-slate-400  text-[10px] ">
        {hashtags.map((has) => has)}
      </p>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, links, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "AccordionContent h-[80%] flex flex-col justify-between dark:text-slate-300 text-slate-800",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText  ">{children}</div>
      <div className="details w-[100%] px-2 flex justify-end gap-6 ">
        <a target="_blank" href={links.github} rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a target="_blank" href={links.liveLink} rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-up-right text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            />
          </svg>
        </a>
      </div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
