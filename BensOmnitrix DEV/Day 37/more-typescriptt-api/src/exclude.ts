type EventType = 'click' | 'scroll' |  'mousemove';

type ExcludeEvent = Exclude<EventType,'scroll'>;

const handleEvent = (exclude: ExcludeEvent){
    // DB Call;
}

handleEvent('scroll'); // Error comes when we exclude some types