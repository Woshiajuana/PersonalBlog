
import path from 'path'
import cmd from 'wow-cmd';

cmd({
    cmdPath: path.join(__dirname),
    options: {
        include: ['.cmd.js'],
        exclude: [],
    }
});
