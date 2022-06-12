import { Alert, AlertIcon, AlertStatus, Stack } from "@chakra-ui/react"
import { Ref, useEffect, useRef } from "react"
import { motion } from 'framer-motion'

type alertType = { isVisible: boolean, message: string, status: AlertStatus }
type props = {
  alert: alertType,
  setAlert: Function
}

function AlertPopup({ alert, setAlert }: props) {

  const ref: any = useRef()

  useEffect(() => {
    if (!alert.isVisible) return
    setTimeout(() => setAlert({ ...alert, isVisible: false }), 4000)
  }, [alert, setAlert])

  const CustomAlert = () => (
    <Stack ref={ref} spacing={3} position='fixed' top='100px' left='680px' ml='calc(-0.5*500px)' >
      <Alert status={alert.status} >
        <AlertIcon />
        {alert.message}
      </Alert>
    </Stack >
  )

  if (alert.isVisible) return (
    /* <motion.div
      animate={{ opacity: [0, 1, 1, 1, 0] }}
      transition={{ duration: 4 }}
    > */
    < CustomAlert />
    // </motion.div>
  )

  return null
}

export default AlertPopup 
