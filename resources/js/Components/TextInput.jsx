import { forwardRef, useEffect, useRef } from "react";
import { Text, TextInput as MtextInput } from "@mantine/core";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return <MtextInput {...props} ref={input} radius="primary" />;

    // return (
    //     <MtextInput
    //         {...props}
    //         type={type}
    //         className={
    //             "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
    //             className
    //         }
    //         ref={input}
    //     />
    // );
});
