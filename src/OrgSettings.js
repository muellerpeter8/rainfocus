function Step1con() {
    return (
        <section className='Step1-con Steps-con'>
            <h4><strong>Step 1:</strong> Base settings.</h4>
            <div className='StepsContent-con ChildWidthFull'>
                <div className='Contentsection-con'>
                    <div className='Subsection'>
                        <h5>General</h5>
                        <p>Define Attendee types &amp; attributes</p>
                    </div>
                    <div className='Subsection'>
                        <h5>Title</h5>
                        <p>Description that explains the value goes here. Description that explains the value goes here.</p>
                    </div>
                    <div className='Subsection'>
                        <h5>Title</h5>
                        <p>Description that explains the value goes here. Description that explains the value goes here.</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 
function Step2con() {
    return (
        <section className='Step2-con Steps-con'>
            <h4><strong>Step 2:</strong> Build registration workflows.</h4>
            <div className='StepsContent-con ChildWidth33'>
                <AttendeeReg />
                <AttendeeReg />
                <AttendeeReg />
                <AddReg />
            </div>
        </section>
    );
}
function AttendeeReg() {
    return(
        <div className='Contentsection-con'>
            <div className='Subsection'>
                <h5>
                    <span className='DownSideArrow HeaderIcon'>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1667 11.5L9.16666 17.5L7.74666 16.08L11.3367 12.5H0.166656V0.5H2.16666V10.5H11.3367L7.74666 6.92L9.16666 5.5L15.1667 11.5Z" fill="#5C00DC"/>
                        </svg>
                    </span>
                    Attendee Registration
                </h5>
                <p>Start by creating a general registration workflow</p>
            </div>
        </div>
    );
}
function AddReg() {
    return(
        <div className='Contentsection-con'>
            <button type='button' className='Subsection AddWorkflow'>
                <div className='AddWorkflow-icon'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8333 5.5H9.83331V9.5H5.83331V11.5H9.83331V15.5H11.8333V11.5H15.8333V9.5H11.8333V5.5ZM10.8333 0.5C5.31331 0.5 0.833313 4.98 0.833313 10.5C0.833313 16.02 5.31331 20.5 10.8333 20.5C16.3533 20.5 20.8333 16.02 20.8333 10.5C20.8333 4.98 16.3533 0.5 10.8333 0.5ZM10.8333 18.5C6.42331 18.5 2.83331 14.91 2.83331 10.5C2.83331 6.09 6.42331 2.5 10.8333 2.5C15.2433 2.5 18.8333 6.09 18.8333 10.5C18.8333 14.91 15.2433 18.5 10.8333 18.5Z" fill="#5C00DC"/>
                    </svg>
                </div>
                <p>Add Registration Workflow</p>
            </button>
        </div>
    );
}
function Step3con() {
    return(
        <section className='Step3-con Steps-con'>
            <h4><strong>Step 3:</strong> Design attendee experiences.</h4>
            <div className='StepsContent-con ChildWidth33'>
                <div className='Contentsection-con'>
                    <div className='Subsection'>
                        <h5>
                            <span className='Icon-computer-purple HeaderIcon'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z" fill="#5C00DC"/>
                                </svg>
                            </span>
                            Attendee Portal
                        </h5>
                        <p>Manage the portal that attendees will see after they've register for your event.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Step4con() {
    return (
        <section className='Step4-con Steps-con'>
            <h4><strong>Step 4:</strong> Build your exhibitor platform.</h4>
            <div className='StepsContent-con ChildWidthMixed Bg-purple'>
                <div className='Contentsection-con Width50 Darkbg'>
                    <div className='Subsection'>
                        <h5>
                            <span className='Icon-computer-white HeaderIcon'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.49 11.9995V12C21.49 12.8271 20.8206 13.5 20 13.5V14V14.5H23.5V15.5H0.5V14.5H4V14V13.5C3.17614 13.5 2.5 12.8239 2.5 12V2C2.5 1.17614 3.17614 0.5 4 0.5H20C20.8237 0.5 21.4997 1.17587 21.5 1.9995C21.5 1.99967 21.5 1.99983 21.5 2L21.49 11.9995ZM4 1.5H3.5V2V12V12.5H4H20H20.5V12V2V1.5H20H4Z" fill="#5C00DC" stroke="white"/>
                                </svg>
                            </span>
                            Exhibitor Portal
                        </h5>
                        <p>Manage the portal that attendees will see after they've register for your event.</p>
                    </div>
                </div>
                <div className='Contentsection-con Width50 Darkbg'>
                    <div className='Subsection'>
                        <h5>
                            <span className='Icon-computer-white HeaderIcon'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.49 11.9995V12C21.49 12.8271 20.8206 13.5 20 13.5V14V14.5H23.5V15.5H0.5V14.5H4V14V13.5C3.17614 13.5 2.5 12.8239 2.5 12V2C2.5 1.17614 3.17614 0.5 4 0.5H20C20.8237 0.5 21.4997 1.17587 21.5 1.9995C21.5 1.99967 21.5 1.99983 21.5 2L21.49 11.9995ZM4 1.5H3.5V2V12V12.5H4H20H20.5V12V2V1.5H20H4Z" fill="#5C00DC" stroke="white"/>
                                </svg>
                            </span>
                            Exhibitor List
                        </h5>
                        <p>Manage the portal that attendees will see after they've register for your event.</p>
                    </div>
                </div>
                <div className='Contentsection-con Width33 Darkbg'>
                    <div className='Subsection'>
                        <h5>
                            <span className='Icon-computer-white HeaderIcon'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.49 11.9995V12C21.49 12.8271 20.8206 13.5 20 13.5V14V14.5H23.5V15.5H0.5V14.5H4V14V13.5C3.17614 13.5 2.5 12.8239 2.5 12V2C2.5 1.17614 3.17614 0.5 4 0.5H20C20.8237 0.5 21.4997 1.17587 21.5 1.9995C21.5 1.99967 21.5 1.99983 21.5 2L21.49 11.9995ZM4 1.5H3.5V2V12V12.5H4H20H20.5V12V2V1.5H20H4Z" fill="#5C00DC" stroke="white"/>
                                </svg>
                            </span>
                            Exhibitor Logos
                        </h5>
                        <p>Manage the portal that attendees will see after they've register for your event.</p>
                    </div>
                </div>
                <div className='Contentsection-con Width33 Darkbg'>
                    <div className='Subsection'>
                        <h5>
                            <span className='Icon-computer-white HeaderIcon'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.49 11.9995V12C21.49 12.8271 20.8206 13.5 20 13.5V14V14.5H23.5V15.5H0.5V14.5H4V14V13.5C3.17614 13.5 2.5 12.8239 2.5 12V2C2.5 1.17614 3.17614 0.5 4 0.5H20C20.8237 0.5 21.4997 1.17587 21.5 1.9995C21.5 1.99967 21.5 1.99983 21.5 2L21.49 11.9995ZM4 1.5H3.5V2V12V12.5H4H20H20.5V12V2V1.5H20H4Z" fill="#5C00DC" stroke="white"/>
                                </svg>
                            </span>
                            Exhibitor Tasks
                        </h5>
                        <p>Manage the portal that attendees will see after they've register for your event.</p>
                    </div>
                </div>
                <div className='Contentsection-con Width33 Darkbg'>
                    <div className='Subsection'>
                        <h5>
                            <span className='Icon-computer-white HeaderIcon'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.49 11.9995V12C21.49 12.8271 20.8206 13.5 20 13.5V14V14.5H23.5V15.5H0.5V14.5H4V14V13.5C3.17614 13.5 2.5 12.8239 2.5 12V2C2.5 1.17614 3.17614 0.5 4 0.5H20C20.8237 0.5 21.4997 1.17587 21.5 1.9995C21.5 1.99967 21.5 1.99983 21.5 2L21.49 11.9995ZM4 1.5H3.5V2V12V12.5H4H20H20.5V12V2V1.5H20H4Z" fill="#5C00DC" stroke="white"/>
                                </svg>
                            </span>
                            Exhibitor Forms
                        </h5>
                        <p>Manage the portal that attendees will see after they've register for your event.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
function OrgSettings() {
    return (
        <div className='OrgSettings'>
            <header className='OrgSettings-header'>
                <h3>Org Settings</h3>
            </header>
            <Step1con />
            <Step2con />
            <Step3con />
            <Step4con />
        </div>
    );
}

export default OrgSettings;