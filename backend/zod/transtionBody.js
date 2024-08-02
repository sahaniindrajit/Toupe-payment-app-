import zod from 'zod'
const transtionBody = zod.object({
    amount: zod.number().min(1),
    to: zod.string()
})

export default transtionBody;