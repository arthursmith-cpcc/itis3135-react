import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import styles from './styles/introForm.module.css'
import ('./scripts/generate_html.js')
import ('./scripts/generate_json.js')
import ('./scripts/introduction.js')

const TAB_STORAGE_KEY = 'intro_form_active_tab';

export default function IntroForm() {
    const [activeTab, setActiveTab] = useState(() => {
        if (typeof window === 'undefined') {
            return 'form-tab';
        }
        return sessionStorage.getItem(TAB_STORAGE_KEY) || 'form-tab';
    });

    const getTabButtonClass = (tabId) => `${styles.tabBtn} ${activeTab === tabId ? `${styles.tabBtnActive} active` : ''} tab-btn`;
    const getTabContentClass = (tabId) => `${styles.tabContent} ${activeTab === tabId ? `${styles.tabContentActive} active` : ''} tab-content`;

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.switchToTab = (tabId) => {
            const validTabs = ['form-tab', 'json-tab', 'html-tab', 'preview-tab'];
            if (validTabs.includes(tabId)) {
                setActiveTab(tabId);
            }
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        sessionStorage.setItem(TAB_STORAGE_KEY, activeTab);
    }, [activeTab]);

    return (
        <>
            <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Intro Form</title>
            <Header />
            <main>
                <div className={styles.content}>
                    {/* Tab Navigation */}
                    <div className={`${styles.tabNav} tab-nav`}>
                        <button type="button" className={getTabButtonClass('form-tab')} onClick={() => setActiveTab('form-tab')} data-tab="form-tab">Form</button>
                        <button type="button" className={getTabButtonClass('json-tab')} onClick={() => setActiveTab('json-tab')} data-tab="json-tab">JSON Preview</button>
                        <button type="button" className={getTabButtonClass('html-tab')} onClick={() => setActiveTab('html-tab')} data-tab="html-tab">HTML Preview</button>
                        <button type="button" className={getTabButtonClass('preview-tab')} onClick={() => setActiveTab('preview-tab')} data-tab="preview-tab">Introduction Preview</button>
                    </div>

                    {/* Form Tab */}
                    <div id="form-tab" className={getTabContentClass('form-tab')}>
                        <h2>Introduction Form</h2>
                        <h3>Please submit the form below:</h3>
                        <form id="introForm" aria-label="Student Profile Form">
                            <button type="button" id="clearFormBtn" aria-label="Clear all form fields">Clear Form</button>
                            <button type="button" id="resetFormBtn" aria-label="Reset form to default values">Reset</button>

                            {/* Personal Information Section */}
                            <div className={styles.formSection} aria-labelledby="personalInfoTitle">
                                <div className={styles.sectionTitle} id="personalInfoTitle">Personal Information</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName">First Name <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="firstName" name="firstName" value="Arthur" placeholder="John" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="middleName">Middle Name or Initial <span className={styles.optional}>(optional)</span></label>
                                    <input type="text" id="middleName" name="middleName" placeholder="Quincy" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="nickname">Nickname or Preferred Name <span className={styles.optional}>(optional)</span></label>
                                    <input type="text" id="nickname" name="nickname" placeholder="Goose" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="lastName">Last Name <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="lastName" name="lastName" value="Smith" placeholder="Adams" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="acknowledgmentStatement">Acknowledgment Statement <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="acknowledgmentStatement" name="acknowledgmentStatement" placeholder="I understand that what is on this page is not password protected and I will not put anything here that I don't want publicly available." required>I understand that what is on this page is not password protected and I will not put anything here that I don't want publicly available.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="acknowledgmentDate">Acknowledgement Date <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="date" id="acknowledgmentDate" name="acknowledgmentDate" data-date-format="mm/dd/yyyy" data-force-polyfill="true" required />
                                </div>
                            </div>

                            {/* Mascot Section */}
                            <div className={styles.formSection} aria-labelledby="mascotInfoTitle">
                                <div className={styles.sectionTitle} id="mascotInfoTitle">Mascot Information</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="mascotAdjective">Mascot Adjective <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="mascotAdjective" name="mascotAdjective" value="Ancient" placeholder="Ancient" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="mascotAnimal">Mascot Animal <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="mascotAnimal" name="mascotAnimal" value="Sabertooth" placeholder="Sabertooth" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="dividerSymbol">Divider Symbol <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="dividerSymbol" name="dividerSymbol" value="|" placeholder="|" required />
                                </div>
                            </div>

                            {/* Picture Section */}
                            <div className={styles.formSection} aria-labelledby="pictureTitle">
                                <div className={styles.sectionTitle} id="pictureTitle">Picture</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="picture">Picture <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="file" id="picture" name="picture" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="pictureCaption">Picture Caption <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="pictureCaption" name="pictureCaption" value="Photo from Carolina Beach c.2013" placeholder="Photo from Carolina Beach" required />
                                </div>
                            </div>

                            {/* Personal Statement Section */}
                            <div className={styles.formSection} aria-labelledby="personalStatementTitle">
                                <div className={styles.sectionTitle} id="personalStatementTitle">Personal Statement</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="personalStatement">Personal Statement <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="personalStatement" name="personalStatement" placeholder="Add a personal statement here." required>I am a Junior transferring from CPCC working towards a B.A. in Computer Science with a focus in Information Technology. I am planning to use this education to learn much more about, and hopefully make a living in, a field that I have dabbled in and loved for more than two decades.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="personalBackground">Personal Background <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="personalBackground" name="personalBackground" placeholder="Describe your personal background." required>I was born and raised in North Carolina and have lived in the Charlotte area since 1999.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="professionalBackground">Professional Background <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="professionalBackground" name="professionalBackground" placeholder="Describe your professional background." required>Since 2009, I have worked in the Estates Division of the Mecklenburg County Clerk's office.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="academicBackground">Academic Background <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="academicBackground" name="academicBackground" placeholder="Describe your academic background." required>I have an associates degree in paralegal technology and an associate in arts degree, both from Central Piedmont Community College</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="computerScienceBackground">Background in Computer Science <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="computerScienceBackground" name="computerScienceBackground" placeholder="Describe your background in computer science." required>I have written or edited HTML documents, bash scripts and Python programs for various personal projects over the years; built PCs and installed their operating systems using Windows, Ubuntu, and Linux Mint; and designed and implemented home hosting and networking solutions.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="primaryWorkComputer">Primary Work Computer & Location <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="primaryWorkComputer" name="primaryWorkComputer" placeholder="Describe your primary work computer and its location." required>My primary school computer is an HP laptop with Windows 11. Most of my work on this device will be done at home.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="backupWorkComputer">Backup Work Computer & Location Plan <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="backupWorkComputer" name="backupWorkComputer" placeholder="Describe your backup work computer and its location plan." required>As a backup, I can use a home desktop computer or a work laptop.</textarea>
                                </div>
                            </div>

                            {/* Course Information Section */}
                            <div className={styles.formSection} aria-labelledby="courseInfoTitle">
                                <div className={styles.sectionTitle} id="courseInfoTitle">Course Information</div>
                                <div id="coursesContainer" role="region" aria-live="polite" aria-label="Course entries"></div>
                                <button type="button" className={`${styles.addCourseBtn} add-course-btn`} id="addCourseBtn" aria-label="Add another course">+ Add Course</button>
                            </div>

                            {/* Quote Section */}
                            <div className={styles.formSection} aria-labelledby="quoteTitle">
                                <div className={styles.sectionTitle} id="quoteTitle">Quote</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="quote">Quote <span className={styles.required} aria-label="required">*</span></label>
                                    <textarea id="quote" name="quote" placeholder="Add a favorite quote here." required>If your fidelity to perfectionism is too high, you never do anything.</textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="quoteAuthor">Quote author <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="quoteAuthor" name="quoteAuthor" value="David Foster Wallace" placeholder="Enter the author of the quote." required />
                                </div>
                            </div>

                            {/* Additional Information Section */}
                            <div className={styles.formSection} aria-labelledby="additionalInfoTitle">
                                <div className={styles.sectionTitle} id="additionalInfoTitle">Additional Information</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="funnyThing">Funny thing <span className={styles.optional}>(optional)</span></label>
                                    <textarea id="funnyThing" name="funnyThing" placeholder="Tell us something funny about yourself."></textarea>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="shareStatement">Something I would like to share <span className={styles.optional}>(optional)</span></label>
                                    <textarea id="shareStatement" name="shareStatement" placeholder="Share something about yourself."></textarea>
                                </div>
                            </div>

                            {/* Footer Links Section */}
                            <div className={styles.formSection} aria-labelledby="footerLinksTitle">
                                <div className={styles.sectionTitle} id="footerLinksTitle">Footer Links</div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink1">Footer Link 1 <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink1" name="footerLink1" value="https://github.com/arthursmith-cpcc" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink1Text">Footer Link 1 Text <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink1Text" name="footerLink1Text" value="GitHub" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink2">Footer Link 2 <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink2" name="footerLink2" value="https://arthursmith-cpcc.github.io" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink2Text">Footer Link 2 Text <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink2Text" name="footerLink2Text" value="GitHub.io" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink3">Footer Link 3 <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink3" name="footerLink3" value="https://webpages.charlotte.edu/asmit775" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink3Text">Footer Link 3 Text <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink3Text" name="footerLink3Text" value="CLTWeb" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink4">Footer Link 4 <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink4" name="footerLink4" value="https://www.freecodecamp.org/arthursmith-uncc" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink4Text">Footer Link 4 Text <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink4Text" name="footerLink4Text" value="freeCodeCamp" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink5">Footer Link 5 <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink5" name="footerLink5" value="https://www.linkedin.com/in/arthur-smith-1a2787101" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="footerLink5Text">Footer Link 5 Text <span className={styles.required} aria-label="required">*</span></label>
                                    <input type="text" id="footerLink5Text" name="footerLink5Text" value="LinkedIn" required />
                                </div>
                            </div>
                            <button type="button" id="clearFormBtn2" aria-label="Clear all form fields">Clear Form</button>
                            <button type="button" id="resetFormBtn2" aria-label="Reset form to default values">Reset</button>
                            <button type="submit" id="submitBtn" aria-label="Submit the form">Submit</button>
                            <button className={`${styles.navBtn} nav-btn`} type="button" id="displayJSONBtn" aria-label="Display form data as JSON">Generate JSON</button>
                            <button className={`${styles.navBtn} nav-btn`} type="button" id="generateHTMLBtn" aria-label="Generate introduction HTML page">Generate HTML</button>
                        </form>
                    </div>

                    {/* JSON Tab */}
                    <div id="json-tab" className={getTabContentClass('json-tab')}>
                        <h2>Introduction JSON</h2>
                        <div id="jsonDisplayContainer"></div>
                    </div>

                    {/* HTML Tab */}
                    <div id="html-tab" className={getTabContentClass('html-tab')}>
                        <h2>Introduction HTML</h2>
                        <div id="htmlDisplayContainer"></div>
                        <div id="htmlActionButtons" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <button id="downloadHTMLBtn" type="button" style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>⬇ Download HTML</button>
                            <button id="copyHTMLBtn" type="button" style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>📋 Copy HTML</button>
                        </div>
                    </div>

                    {/* Introduction Preview Tab */}
                    <div id="preview-tab" className={getTabContentClass('preview-tab')}>
                        <h2>Introduction Preview</h2>
                        <div id="introductionPreviewContainer" style={{ padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
                            {/* Introduction page will be rendered here */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}