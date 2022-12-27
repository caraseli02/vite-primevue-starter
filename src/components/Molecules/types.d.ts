export type CalendarValueType = Date | Date[] | undefined;
export type CalendarSelectionModeType = 'single' | 'multiple' | 'range' | undefined;
export type CalendarViewType = 'date' | 'month' | 'year' | undefined;
export interface CalendarResponsiveOptions {
    /**
     * Breakpoint for responsive mode. Exp; @media screen and (max-width: ${breakpoint}) {...}
     */
    breakpoint: string;
    /**
     * The number of visible months on breakpoint.
     */
    numMonths: number;
}