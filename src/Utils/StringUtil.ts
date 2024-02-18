export const getInitial = (name: string): string => {
    if (name && name.length !== 0){
        return name.charAt(0);
    }
    return '';
}