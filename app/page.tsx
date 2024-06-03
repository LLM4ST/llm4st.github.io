import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from "@/components/ui/table"
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import {
    ALPHABETICAL_ORDER,
    CFP_CONTENT,
    CFP_EMAIL_CONTENT,
    CFP_SUB_LINK_CONTENT,
    CFP_TITLE,
    EMAIL,
    INTRO_CONTENT,
    INTRO_TITLE,
    KEY_DATES_NOTIFICATION_OF_PAPER_ACCEPTANCE_CONTENT,
    KEY_DATES_TITLE,
    KEY_DATES_WORKSHOP_PAPER_SUBMISSION_DUE_DATE_CONTENT,
    NIPS_24_WORKSHOP_DATE,
    NIPS_24_WORKSHOP_DATE_CONTENT,
    NOTIFICATION_OF_PAPER_ACCEPTANCE,
    ORGANIZERS_MEMBER,
    ORGANIZERS_TITLE,
    PROGRAM_COMMITTEE_MEMBER,
    PROGRAM_COMMITTEE_TITLE,
    SCHEDULE_AGENDA,
    SCHEDULE_CONTENT,
    SCHEDULE_SPECIAL,
    SCHEDULE_TITLE,
    SPEAKERS_MEMBER,
    SPEAKERS_TITLE,
    SUBMISSION_LINK,
    WORKSHOP_PAPER_SUBMISSION_DUE_DATE
} from "@/constants";
import Link from "next/link";
import Profile from "@/components/profile/Profile";

export default function Home() {
    return (
        <div>

            <Navbar/>

            <Hero/>

            <section id="intro" className="odd-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8 text-center">{INTRO_TITLE}</h2>
                        <p className="text-lg whitespace-pre-wrap sm:text-xl lg:text-2xl text-gray-500 mb-8 text-left">
                            {INTRO_CONTENT}
                        </p>
                    </div>
                </div>
            </section>

            <section id="cfp" className="even-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8 text-center">{CFP_TITLE}</h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8 text-left">
                            {CFP_CONTENT}
                        </p>
                        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-gray-700 mb-8 text-left">
                            {CFP_SUB_LINK_CONTENT}
                            <Link className="underline" href={SUBMISSION_LINK}>{SUBMISSION_LINK}</Link>
                        </p>
                        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-gray-700 mb-8 text-left">
                            {CFP_EMAIL_CONTENT}
                            <Link className="underline" href={"mailto:" + EMAIL}>{EMAIL}</Link>
                        </p>
                    </div>
                </div>
            </section>

            <section id="key-dates" className="odd-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8">{KEY_DATES_TITLE}</h2>
                        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-gray-700 mb-8">
                            {KEY_DATES_WORKSHOP_PAPER_SUBMISSION_DUE_DATE_CONTENT}
                            {WORKSHOP_PAPER_SUBMISSION_DUE_DATE}
                        </p>
                        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-gray-700 mb-8">
                            {KEY_DATES_NOTIFICATION_OF_PAPER_ACCEPTANCE_CONTENT}
                            {NOTIFICATION_OF_PAPER_ACCEPTANCE}
                        </p>
                        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-gray-700 mb-8">
                            {NIPS_24_WORKSHOP_DATE_CONTENT}
                            {NIPS_24_WORKSHOP_DATE}
                        </p>
                    </div>
                </div>
            </section>

            <section id="schedule" className="even-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8">{SCHEDULE_TITLE}</h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8 text-left">
                            {SCHEDULE_CONTENT}
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <Table className="sm:text-xl lg:text-2xl">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-center">Time</TableHead>
                                        <TableHead className="text-center">Title</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {SCHEDULE_AGENDA.map((item, index) => (
                                        <TableRow key={"table-row-" + index}>
                                            <TableCell
                                                className="text-gray-700 font-bold lg:min-w-48">{item[0]}</TableCell>
                                            <TableCell className="text-gray-700 font-bold">{item[1]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8 text-left">
                            {SCHEDULE_SPECIAL}
                        </p>
                    </div>
                </div>
            </section>

            <section id="speakers" className="odd-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8">{SPEAKERS_TITLE}</h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8">
                            {ALPHABETICAL_ORDER}
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {SPEAKERS_MEMBER.map((item, index) => (
                                <Profile
                                    key={"organizers" + index}
                                    name={item[0]}
                                    title={item[1]}
                                    orgName={item[2]}
                                    avatar={item[3]}
                                    profileUrl={item[4]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="organizers" className="even-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8">{ORGANIZERS_TITLE}</h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8">
                            {ALPHABETICAL_ORDER}
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {ORGANIZERS_MEMBER.map((item, index) => (
                                <Profile
                                    key={"organizers" + index}
                                    name={item[0]}
                                    title={item[1]}
                                    orgName={item[2]}
                                    avatar={item[3]}
                                    profileUrl={item[4]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="program-committee" className="odd-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-8">{PROGRAM_COMMITTEE_TITLE}</h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8">
                            {ALPHABETICAL_ORDER}
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {PROGRAM_COMMITTEE_MEMBER.map((item, index) => (
                                <Profile
                                    key={"organizers" + index}
                                    name={item[0]}
                                    title={item[1]}
                                    orgName={item[2]}
                                    avatar={item[3]}
                                    profileUrl={item[4]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}