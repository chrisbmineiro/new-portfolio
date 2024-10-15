import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Made by <span className="font-bold"><a href="https://github.com/chrisbmineiro">Christopher Barros</a></span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer