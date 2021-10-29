export const eventToggle = (value, func) => func(!value)

export const handleChangeMultiSelect = (event, func) => {
    const {target: { value },} = event
    func(typeof value === 'string' ? value.split(',') : value,)
}

export const openModal = func => func(true)
export const closeModal = func => func(false)
export const handleCheckboxStatus = (event, func) => func(event.target.checked)