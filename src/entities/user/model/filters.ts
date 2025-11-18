export const filterUserPageData = [
    {
        type: "select",
        label: "Role name",
        paramsKey: "roleName",
        placeholder: "Select role name",
        options: []
    },
    {
        type: "select",
        label: "Is blocked",
        paramsKey: "isBlocked",
        placeholder: "Select is blocked",
        options: [
            { value: "true", label: "yes" },
            { value: "false", label: "no" }
        ]
    }
];
