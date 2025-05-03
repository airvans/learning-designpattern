// "use client"

import { Button, CloseButton, Drawer, Portal , Wrap, Box} from "@chakra-ui/react"
import { useState } from "react"

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  return (
    <Box>
      <Drawer.Root open={open} placement="start">
      <Drawer.Trigger >
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer/>
            <Drawer.CloseTrigger/>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
    </Box>
  )
}


export default Sidebar