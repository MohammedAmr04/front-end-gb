import styles from './styles.module.css'
const {footer} = styles
export default function Footer() {
  return (
    <footer className={`mt-auto text-center pt-3 pb-3 ${footer}`}>© 2024 Our To Read. All rights reserved.</footer>
  )
}
