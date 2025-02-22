import { useState } from 'react';
import { Search, ChevronDown, Moon, Sun, LayoutGrid, LineChart, Briefcase, Users, FileText, Settings, CircleCheckBig, CircleX, ChevronLeft } from 'lucide-react';
import logo from '../../assets/comx-logo.svg';

type Product = {
  name: string;
  quantity: number;
  price: number;
  code: string;
};

const DashboardPage = () => {
  const [selectedBoard, setSelectedBoard] = useState('X-Traded');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [theme, setTheme] = useState<'LIGHT' | 'DARK'>('LIGHT');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const balances = {
    cash: 8374763,
    securities: 8374763,
    loan: 7542246
  };

  const products: Product[] = [
    { name: 'Soybeans (SSBS)', quantity: 2003, price: 1736.92, code: 'SSBS' },
    { name: 'Paddy Rice (SPRL)', quantity: 11293, price: 3627.00, code: 'SPRL' },
    { name: 'Maize (SMAZ)', quantity: 1832, price: 8294.01, code: 'SMAZ' },
    { name: 'Sorghum (SSGM)', quantity: 29102, price: 8192.00, code: 'SSGM' },
    { name: 'Fair Trade ETC (FETC)', quantity: 3212, price: 1736.92, code: 'FETC' },
  ];

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const tickerData = [
    { name: 'Soybean (SBBS)', price: 30834.59 },
    { name: 'Sorghum (SSGM)', price: 30834.59 },
    { name: 'Soybean (SBBS)', price: 30834.59 },
    { name: 'Maize (SMAZ)', price: 30834.59 },
    { name: 'Paddy Rice (SPRL)', price: 30834.59 },
    { name: 'Cocoa (SCOC)', price: 30834.59 },
    { name: 'Soybean (SBBS)', price: 30834.59 },
    { name: 'Soybean (SBBS)', price: 30834.59 }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-[100]">
        <div className="flex justify-between items-center px-4 z-50 py-2">
          <img src={logo} alt="ComX Logo" className="h-12" />
          
          <div className="flex items-center">
            <div className="flex items-center space-x-3 mr-4">
              <button 
                className="flex items-center space-x-1 px-2 py-1 text-[11px] border text-black bg-white border-gray-200 rounded-full"
                onClick={() => setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')}
              >
                {theme === 'LIGHT' ? (
                  <>
                    <Sun className="w-3 h-3" />
                    <span>LIGHT</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3 h-3" />
                    <span>DARK</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex border-r border-gray-200 pr-4 mr-4">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-[10px] uppercase text-gray-500">CASH BALANCE</p>
                  <p className="text-sm font-medium text-black">{formatCurrency(balances.cash)}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500">SECURITIES VALUE</p>
                  <p className="text-sm font-medium text-black">{formatCurrency(balances.securities)}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500">LOAN BALANCE</p>
                  <p className="text-sm font-medium text-black">{formatCurrency(balances.loan)}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-2 py-1 text-[11px] bg-[#231F20] text-white rounded flex items-center space-x-1">
                <span className="uppercase">DEMO</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="fixed left-0 top-[52px] bottom-0 w-[100px] bg-white border-r border-gray-200 p-4">
        <div className="space-y-4">
          <div className="flex flex-col items-center p-3 hover:bg-gray-50 rounded cursor-pointer">
            <LayoutGrid size={24} className="text-black mb-1" />
            <span className="text-xs text-black">Overview</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded cursor-pointer">
            <LineChart size={24} className="text-red-600 mb-1" />
            <span className="text-xs text-red-600">Market</span>
          </div>
          <div className="flex flex-col items-center p-3 hover:bg-gray-50 rounded cursor-pointer">
            <Briefcase size={24} className="text-black mb-1" />
            <span className="text-xs text-black">Portfolio</span>
          </div>
          <div className="flex flex-col items-center p-3 hover:bg-gray-50 rounded cursor-pointer">
            <Users size={24} className="text-black mb-1" />
            <span className="text-xs text-black">Community</span>
          </div>
          <div className="flex flex-col items-center p-3 hover:bg-gray-50 rounded cursor-pointer">
            <FileText size={24} className="text-black mb-1" />
            <span className="text-xs text-black">Reports</span>
          </div>
          <div className="flex flex-col items-center p-3 hover:bg-gray-50 rounded cursor-pointer">
            <Settings size={24} className="text-black mb-1" />
            <span className="text-xs text-black">Settings</span>
          </div>
        </div>
      </div>

      {/* Submenu - after sidebar */}
      <div className={`fixed left-[100px] top-[52px] w-[200px] h-[400px] bg-white border-r border-gray-200 mb-4 rounded-lg z-10 transition-all duration-300 ${isCollapsed ? 'w-[60px]' : 'w-[200px]'}`}>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-2 bg-white border border-gray-200 rounded-full p-1 hover:bg-gray-50"
        >
          <ChevronLeft className={`w-4 h-4 text-black transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>

        <div className="p-4">
          {!isCollapsed && (
            <div className="relative w-full mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-2 py-2 text-sm border bg-white border-gray-200 rounded"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          )}

          <div className="space-y-4">
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} text-sm text-black hover:text-red-600 cursor-pointer`}>
              <LineChart size={isCollapsed ? 32 : 16} className="text-black" />
              {!isCollapsed && <span>Product View</span>}
            </div>
            
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} text-sm text-red-600 cursor-pointer`}>
              <Briefcase size={isCollapsed ? 32 : 16} className="text-red-600" />
              {!isCollapsed && <span>Order Book</span>}
            </div>
            
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} text-sm text-black hover:text-red-600 cursor-pointer`}>
              <FileText size={isCollapsed ? 32 : 16} className="text-black" />
              {!isCollapsed && <span>Price History</span>}
            </div>
            
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} text-sm text-black hover:text-red-600 cursor-pointer`}>
              <Users size={isCollapsed ? 32 : 16} className="text-black" />
              {!isCollapsed && <span>Open Orders</span>}
            </div>
            
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} text-sm text-black hover:text-red-600 cursor-pointer`}>
              <CircleCheckBig size={isCollapsed ? 32 : 16} className="text-black" />
              {!isCollapsed && <span>Closed Tades</span>}
            </div>
            
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} text-sm text-black hover:text-red-600 cursor-pointer`}>
              <CircleX size={isCollapsed ? 32 : 16} className="text-black" />
              {!isCollapsed && <span>Cancelled Trades</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="ml-[240px] p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Search and Filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Board and Product Filters */}
          <div className="space-y-4">
            {/* Board Selection */}
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-4">Board</span>
              <div className="flex">
                {['X-Traded', 'OTC', 'FI', 'Derivatives'].map((board) => (
                  <button
                    key={board}
                    onClick={() => setSelectedBoard(board)}
                    className={`px-4 py-1.5 text-sm rounded-full ${
                      selectedBoard === board 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {board}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Selection */}
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-4">Product</span>
              <div className="flex gap-1">
                {['All', 'SMAZ', 'SBBS', 'SPRL', 'SGNG', 'SSGM', 'FETC', 'SCOC'].map((product) => (
                  <button
                    key={product}
                    onClick={() => setSelectedProduct(product)}
                    className={`px-4 py-1.5 text-sm rounded-full ${
                      selectedProduct === product 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Tables */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            {/* Buy Orders */}
            <div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-4 font-normal">Products</th>
                    <th className="pb-4 font-normal">Quantity</th>
                    <th className="pb-4 font-normal">Bid Price</th>
                    <th className="pb-4 font-normal"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map((product, idx) => (
                    <tr key={idx} className="border-t border-gray-50">
                      <td className="py-4 text-gray-900">{product.name}</td>
                      <td className="py-4 text-gray-900">{product.quantity}</td>
                      <td className="py-4 text-green-600">{product.price.toFixed(2)}</td>
                      <td className="py-4">
                        <button className="px-4 py-1 text-xs border bg-white border-green-600 text-green-600 rounded hover:bg-green-50">
                          Buy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Sell Orders */}
            <div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-4 font-normal">Products</th>
                    <th className="pb-4 font-normal">Quantity</th>
                    <th className="pb-4 font-normal">Offer Price</th>
                    <th className="pb-4 font-normal"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: 'Soybeans (SSBS)', quantity: 2003, price: 1736.92 },
                    { name: 'Paddy Rice (SPRL)', quantity: 11293, price: 3627.00 },
                    { name: 'Maize (SMAZ)', quantity: 1832, price: 8294.01 },
                    { name: 'Sorghum (SSGM)', quantity: 29102, price: 8192.00 },
                    { name: 'Fair Trade ETC (FETC)', quantity: 3212, price: 1736.92 },
                    { name: 'Fair Trade ETC (FETC)', quantity: 3212, price: 1736.92 }
                  ].map((product, idx) => (
                    <tr key={idx} className="border-t border-gray-50">
                      <td className="py-4 text-gray-900">{product.name}</td>
                      <td className="py-4 text-gray-900">{product.quantity}</td>
                      <td className="py-4 text-red-600">{product.price.toFixed(2)}</td>
                      <td className="py-4">
                        <button className="px-4 py-1 text-xs border bg-white border-red-600 text-red-600 rounded hover:bg-red-50">
                          Sell
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trade Log Section */}
          <div className="mt-8">
            <h3 className="text-sm text-gray-500 mb-4">TRADE LOG</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="pb-3 font-normal">Security</th>
                  <th className="pb-3 font-normal">Board</th>
                  <th className="pb-3 font-normal">Order Type</th>
                  <th className="pb-3 font-normal">Matched Price</th>
                  <th className="pb-3 font-normal">Quantity</th>
                  <th className="pb-3 font-normal">Date</th>
                  <th className="pb-3 font-normal">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { security: 'Soybeans (SSBS)', board: 'X-Traded', type: 'Buy', price: 1792.65, quantity: 9265, date: '17 Oct, 2020', time: '07:38' },
                  { security: 'Paddy Rice (SPRL)', board: 'X-Traded', type: 'Buy', price: 1792.65, quantity: 9265, date: '8 Sep, 2020', time: '02:02' },
                  { security: 'Maize (SMAZ)', board: 'OTC', type: 'Sell', price: 1792.65, quantity: 9265, date: '24 May, 2020', time: '06:42' },
                  { security: 'Sorghum (SSGM)', board: 'FI', type: 'Sell', price: 1792.65, quantity: 9265, date: '1 Feb, 2020', time: '01:09' },
                  { security: 'Soybeans (SSBS)', board: 'X-Traded', type: 'Buy', price: 1792.65, quantity: 9265, date: '21 Sep, 2020', time: '07:59' }
                ].map((trade, idx) => (
                  <tr key={idx} className="text-sm">
                    <td className="py-4 text-gray-900">{trade.security}</td>
                    <td className="py-4 text-gray-900">{trade.board}</td>
                    <td className={`py-4 ${trade.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                      {trade.type}
                    </td>
                    <td className="py-4 text-gray-900">{trade.price}</td>
                    <td className="py-4 text-gray-900">{trade.quantity}</td>
                    <td className="py-4 text-gray-900">{trade.date}</td>
                    <td className="py-4 text-gray-900">{trade.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Ticker tape */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-2 z-[100]">
        <div className="flex items-center">
          <div className="bg-red-600 text-white px-4 py-1 flex items-center">
            <span className="text-sm font-medium">Live Market</span>
          </div>
          
          <div className="overflow-hidden whitespace-nowrap relative">
            <div className="animate-ticker inline-flex">
              {/* First set of items */}
              {tickerData.map((item, idx) => (
                <div 
                  key={`first-${idx}`}
                  className="flex items-center px-6"
                >
                  <span className="text-sm mr-2">{item.name}</span>
                  <span className="text-sm">₦{item.price.toLocaleString()}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {tickerData.map((item, idx) => (
                <div 
                  key={`second-${idx}`}
                  className="flex items-center px-6"
                >
                  <span className="text-sm mr-2">{item.name}</span>
                  <span className="text-sm">₦{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 
