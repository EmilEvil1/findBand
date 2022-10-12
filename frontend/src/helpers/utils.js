export const eventToggle = (value, func) => func(!value)
export const openModal = func => func(true)
export const closeModal = func => func(false)
export const checkTokenValidate = token => (token === 'undefined') || (typeof token === undefined) || (!token)

export const handleChangeMultiSelect = (event, func) => {
    const {target: { value },} = event
    func(typeof value === 'string' ? value.split(',') : value,)
}

export const getUrlQueryParams = (param) => (new URLSearchParams(window.location.search)).get(param)
