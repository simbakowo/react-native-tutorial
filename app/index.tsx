import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, Slot, useRouter, Link } from 'expo-router'
import MyRightCustomHeader from '../components/custom_headers'

export default function Home (){
    return (
        <SafeAreaView className='flex bg-slate-900 items-center justify-center h-full'>
            
            <Stack.Screen 
                options={{
                    //headerShadowVisible:false,
                    // headerStyle: {backgroundColor:'red'},
                    // headerTitle:"Heyy",
                    // headerRight:()=>(<Text>Right</Text>),
                    headerRight:()=><MyRightCustomHeader/>,
                    //header:()=><MyRightCustomHeader/>
                }} 
            />

            <Link href={'/profile'}>
            <View className='w-20 h-20 bg-purple-300 rounded-md'>
                <Text>Hello</Text>
            </View>
            </Link>
            
        </SafeAreaView>
        
        
    )
}