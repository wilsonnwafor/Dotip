import { Wallet, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/utils/walletContext"
import { formatAddress } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router"

export function Header() {
  const { account, isConnecting, connect, disconnect } = useWallet()

  return (
    <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-500  to-yellow-500" />
          <span className="text-xl font-bold">DOTip</span>
        </Link>
        {account ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-linear-to-r from-pink-500 via-secondary to-yellow-500 text-white">
                <Wallet className="w-4 h-4" />
                <span className="hidden sm:inline">{formatAddress(account.address)}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-gray-100">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{account.name || "My Wallet"}</p>
                <p className="text-xs text-gray-400">{formatAddress(account.address, 8)}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={disconnect} className="cursor-pointer text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="outline" className="gap-2 bg-linear-to-r from-pink-500 via-secondary to-yellow-500 text-white" onClick={connect} disabled={isConnecting}>
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
          </Button>
        )}
      </div>
    </header>
  )
}
