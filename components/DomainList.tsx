// import React from 'react';

// interface CartActionsProps {
//   domains: string[];
//   availability: Record<string, boolean>;
//   onClearCart: () => void;
//   onRemoveUnavailable: () => void;
//   requiredCount: number;
// }

// const CartActions: React.FC<CartActionsProps> = ({
//   domains,
//   onClearCart,
//   onRemoveUnavailable,
// }) => {
//   const handleCopyToClipboard = () => {
//     navigator.clipboard.writeText(domains.join(', '));
//     alert('Domains copied to clipboard');
//   };

//   return (
//     <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
  
//       {/* <button
//         onClick={onRemoveUnavailable}
//         className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg shadow-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
//       >
//         Remove Unavailable
//       </button> */}

 
//     </div>
//   );
// };

// export default CartActions;
