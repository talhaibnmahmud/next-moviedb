const convertCurrency = (money: number) => {
    return money.toLocaleString('en-US', { currency: 'USD', style: 'currency', maximumFractionDigits: 0 })
}

export { convertCurrency }