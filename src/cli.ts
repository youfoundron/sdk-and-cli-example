import { program } from 'commander'
import { foo } from './sdk'

program
  .command('foo')
  .action(() => {
    console.log(foo())
  })

program.parse(process.argv)