import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{ headerTitle: 'Home',  title: 'Home' }}
      />
      <Tabs.Screen
        name='page2'
        options={{ headerTitle: 'Page 2',  title: 'Page 2' }}
      />
      <Tabs.Screen
        name='map'
        options={{ headerTitle: 'Map', title: 'Map' }}
      />
    </Tabs>
  )
}

export default TabsLayout