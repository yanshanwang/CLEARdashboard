import './globals.css'
import Header from '@/components/layouts/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}




// import './globals.css'
// import Header from '@/components/layouts/Header'
// import Header1 from '@/components/layouts/Header1'
// import styles from './/Layout.module.css'
// export default function RootLayout({ children }) {
//   return (
    
//       <div className={styles.pageContainer}>
//       <div className={styles.wireframesontainer}>
//         {children}
//         </div>
//     </div>
     
   
   
//   )
// }

