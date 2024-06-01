const useBoxShadow = (isActive: boolean) => {
    const boxShadow = isActive ? '0px 4px 8px 0px rgba(0,0,0,0.1)' : 'none'
    return boxShadow
}

export default useBoxShadow
