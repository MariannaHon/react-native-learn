import {Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home() {

    return (
        <>
            <TouchableOpacity
                onPress={async () => {
                    await auth().signOut(); 
                }}>
                <Text>Log out</Text>
            </TouchableOpacity>
            <Text>Hello </Text>
        </>
        
    );
}