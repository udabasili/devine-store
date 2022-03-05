export const logOutHandler = async () => {
    return await fetch('/api/auth/logout',{
        method: "GET",
        }
    )
};