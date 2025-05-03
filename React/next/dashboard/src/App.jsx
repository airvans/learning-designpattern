import { Box, Button, HStack} from "@chakra-ui/react"
import Sidebar from "./sidebar"


function App() {

  return (
    <>
    <Sidebar></Sidebar>
    </>
  )
}

const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}

export default App



