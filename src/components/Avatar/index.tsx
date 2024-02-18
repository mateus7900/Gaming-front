import { Avatar } from "@mui/material";
interface ProfileAvatarProps {
    name: string
}

export default function ProfileAvatar({ name }: ProfileAvatarProps) {
    function stringToColor(string: string) {
        if (string) {
            let hash = 0;
            let i;
        
            for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
            }
        
            let color = '#';
        
            for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
            }
        
            return color;
        }
      }
      
      function stringAvatar(name: string) {
        if (name){
            return {
                sx: {
                  bgcolor: stringToColor(name.toUpperCase()),
                },
              };
        }
      }

    return <Avatar {...stringAvatar(name)} />
}